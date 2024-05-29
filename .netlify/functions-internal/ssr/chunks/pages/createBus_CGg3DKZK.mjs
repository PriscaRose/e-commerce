import { B as Bus } from './bookSeat_lnmxtZ2Z.mjs';

const defaultSeat = {
  isAvailable: true,
  isPicked: false,
  passengerFirstName: "",
  passengerLastName: "",
  passengerPhoneNumber: "",
  passengerIDCard: ""
};

const POST = async (context) => {
  const { request, locals } = context;
  const { body } = await request.json();
  const {
    destination,
    departureTime,
    driver,
    estimatedDuration,
    departureDate,
    busDepartureLocation,
    busType,
    busNumber,
    breaks,
    price
  } = body;
  const user = locals.user;
  if (!body) {
    return new Response(JSON.stringify({ message: "Failed to create Bus" }), {
      status: 500
    });
  }
  const seats = [];
  try {
    for (let index = 0; index < Number(body?.numberOfSeats); index++) {
      seats.push(defaultSeat);
    }
    const newBus = new Bus({
      destination,
      departureTime,
      driver,
      estimatedDuration,
      departureDate,
      busDepartureLocation,
      busType,
      busNumber,
      breaks,
      seats,
      cooperative: {
        name: user?.cooperativeName,
        phoneNumber: "034 55 666 77"
      },
      price
    });
    await newBus.save();
    return new Response(
      JSON.stringify({ message: "Bus created successfully", bus: newBus }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to create Bus" }), {
      status: 500
    });
  }
};

const createBus = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { createBus as c, defaultSeat as d };
