export default function DonationsSection() { 
return (
<section
  id="donations"
  className="bg-[#fff6e9] py-16 px-6 md:px-12 lg:px-20 text-center overflow-hidden relative"
>
  <div className="relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
      Support Brothers Ramleela – Your Contribution Preserves Culture
    </h2>

    <div className="flex justify-center mb-6">
      <img
        src="/assets/donationqr.jpeg"
        alt="Donation QR Code"
        className="w-110 h-110 rounded-lg shadow-md border border-gray-300"
      />
    </div>

    <p className="text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
      The Brothers Ramleela Committee is supported entirely through donations, sponsorships,
      and CSR contributions. Every rupee you contribute goes into stage setup, artists, costumes,
      sound & lighting, seating arrangements, prasad, and safety measures. <br /> <br />
      We are a registered society under the Societies Registration Act and are in the process
      of applying for <b>80G tax exemption</b>. Once approved, all donations will be eligible
      for tax deduction under the Income Tax Act.
    </p>

    {/* Donation Slabs */}
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto mb-12 border border-yellow-400 text-left">
      <h3 className="text-2xl font-semibold text-yellow-700 mb-4">
        🙏 Donation Slabs:
      </h3>
      <ul className="space-y-3 text-gray-700">
        <li>● <b>₹5,000+</b> → Name on Donor Recognition Board</li>
        <li>● <b>₹25,000+</b> → Reserved Seating Passes + Name Announced on Stage</li>
        <li>● <b>₹1,00,000+</b> → Sponsor of One Day’s Ramleela (Stage Acknowledgment)</li>
        <li>● <b>Custom CSR Partnership</b> → Logo placement, branding, press visibility</li>
      </ul>
    </div>

    {/* Bank Details */}
    <div className="bg-white rounded-xl shadow-md p-6 max-w-lg mx-auto mb-10 border border-yellow-400">
      <h3 className="text-xl font-semibold text-yellow-700 mb-4">Bank Details</h3>
      <ul className="text-gray-700 space-y-2 text-left">
        <li><span className="font-bold">Account Name:</span> - Brothers ramlila committee Delhi</li>
        <li><span className="font-bold">Account Number:</span>  92401006713064</li>
        <li><span className="font-bold">Bank:</span> AXIS BANK MUKHERJEE NAGAR</li>
        <li><span className="font-bold">IFSC:</span> UTIB0001838</li>
      </ul>
    </div>
  </div>
</section>
);
}
