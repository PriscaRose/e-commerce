import { B as Bus } from './bookSeat_lnmxtZ2Z.mjs';
import { d as defaultSeat } from './createBus_Cl6weAZ7.mjs';

const POST = async ({ request }) => {
  const { busId } = await request.json();
  try {
    const bus = await Bus.findOne({ _id: busId });
    if (!bus) {
      return new Response(JSON.stringify({ message: "Bus not found" }), {
        status: 404
      });
    }
    const filter = { _id: busId };
    const seats = bus.seats.map(() => defaultSeat);
    const today = /* @__PURE__ */ new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formattedDate = `${year}-${month < 10 ? "0" : ""}${month}-${day < 10 ? "0" : ""}${day}`;
    const update = {
      destination: bus.busDepartureLocation,
      busDepartureLocation: bus.destination,
      departureDate: formattedDate,
      seats
    };
    const updatedBus = await Bus.findOneAndUpdate(filter, update, {
      new: true
    });
    await updatedBus.save();
    return new Response(
      JSON.stringify({ message: "Bus updated successfully", bus: updatedBus }),
      {
        status: 200
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Failed to update bus" }), {
      status: 500
    });
  }
};

export { POST };
