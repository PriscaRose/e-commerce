import mongoose from 'mongoose';

let Bus;
try {
  Bus = mongoose.model("Bus");
} catch (error) {
  const busSchema = new mongoose.Schema({
    destination: { type: String, required: true },
    busDepartureLocation: { type: String },
    departureTime: {
      type: String,
      required: true
    },
    departureDate: { type: Date, required: true },
    driver: {
      driverName: { type: String, required: false },
      driverPhoneNumber: { type: String, required: false },
      IDCardNumber: { type: String, required: false },
      licenseNumber: { type: String, required: false },
      address: { type: String, required: false },
      availability: { type: String, required: false },
      emergencyContact: { type: String, required: false }
    },
    estimatedDuration: { type: String, required: true },
    breaks: { type: Number, required: true },
    price: { type: Number, required: true },
    busNumber: { type: String, required: true },
    busType: { type: String, required: true },
    cooperative: {
      name: { type: String, required: false },
      phoneNumber: { type: String, required: false }
    },
    seats: [
      {
        isAvailable: { type: Boolean },
        isPicked: { type: Boolean },
        passengerFirstName: { type: String },
        passengerLastName: { type: String },
        passengerPhoneNumber: { type: String },
        passengerIDCard: { type: String }
      }
    ]
  });
  Bus = mongoose.model("Bus", busSchema);
}

const POST = async ({ request }) => {
  const formData = await request.formData();
  const seatId = formData.get("seatId");
  const busId = formData.get("busId");
  let updatedBus;
  if (!seatId || seatId === "undefined" || !busId || busId === "undefined") {
    return new Response(JSON.stringify({ message: "Seat or Bus not found" }), {
      status: 404
    });
  }
  try {
    updatedBus = await Bus.findOne({ _id: busId });
    if (!updatedBus) {
      return new Response(JSON.stringify({ message: "Bus not found" }), {
        status: 404
      });
    }
    const updatedSeat = await updatedBus.seats.map((seat) => {
      if (seat.id === seatId) {
        const seatData = Object.keys(seat.toJSON()).filter(
          (key) => key !== "_id" && key !== "isAvailable"
        );
        seatData?.forEach((key) => {
          if (key === "isPicked") {
            return seat[key] = true;
          }
          return seat[key] = formData.get(key);
        });
      }
      return seat;
    });
    if (!updatedBus) {
      return new Response(
        JSON.stringify({ message: "Failed to update seat" }),
        {
          status: 500
        }
      );
    }
    updatedBus.seats = updatedSeat;
    await updatedBus.save();
    return new Response(
      JSON.stringify({ message: "Bus updated successfully", bus: updatedBus }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to update Bus" }), {
      status: 500
    });
  }
};

const bookSeat = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { Bus as B, bookSeat as b };
