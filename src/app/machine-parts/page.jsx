import NavBar from "../../../Components/Nav";
import MachineHeader from "../../../Components/MachineParts page comp/MachineHeader";
import MachineDiagram from "../../../Components/MachineParts page comp/MachineDiagram";
import PartsGrid from "../../../Components/MachineParts page comp/PartsGrid";
import MachineSpecs from "../../../Components/MachineParts page comp/MachineSpecs";
import MachineCTA from "../../../Components/MachineParts page comp/MachineCTA";

export const metadata = {
  title: "Banana Extractor Machine & Parts | Organic Fiber",
  description:
    "Explore the Banana Extractor Machine blueprint, individual spare parts (Main Cover, Feed Chamber, Adjustment Knob, Belt Guard, Extractor Drum, Frame, Motor, Discharge Outlet), technical specifications, and key features.",
};

export default function MachinePartsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 selection:bg-[#778D4D] selection:text-white">
      {/* Navigation */}
      <NavBar variant="dark" />

      {/* Hero Header */}
      <MachineHeader />

      {/* Interactive Machine Blueprint & Parts List */}
      <MachineDiagram />

      {/* Individual Parts Detailed Grid */}
      <PartsGrid />

      {/* Machine Specifications & Maintenance Guidelines */}
      <MachineSpecs />

      {/* Call to Action */}
      <MachineCTA />
    </main>
  );
}
