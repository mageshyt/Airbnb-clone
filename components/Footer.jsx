function Footer() {
  return (
    <div className="grid grid-cols-1 bg-[#050404]  md:grid-cols-4   gap-y-10 py-14 px-32 bg-gray-100 text-gray-600">
      {/* About */}
      <div className="sm:border-gray-500 space-y-4">
        <h5 className="font-bold text-gray-300"> About</h5>
        <p className="cursor-pointer">How Airbnb Works</p>
        <p className="cursor-pointer">Newsroom</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb Plus</p>
      </div>
      {/* Community */}
      <div className="space-y-4">
        <h5 className="font-bold text-gray-300"> COMMUNITY</h5>
        <p className="cursor-pointer">Diversity & Belonging</p>
        <p className="cursor-pointer">Its a pretty awesome Clone</p>
        <p className="cursor-pointer">Referrals accepted</p>
        <p className="cursor-pointer">Papa React </p>
      </div>
      {/* Host */}
      <div className="space-y-4">
        <h5 className="font-bold text-gray-300"> HOST</h5>
        <p className="cursor-pointer">Host your home</p>
        <p className="cursor-pointer">Host an Online Experience</p>
        <p className="cursor-pointer">Responsible hosting</p>
        <p className="cursor-pointer">Host an Experience</p>
      </div>
      {/* Support */}
      <div className="space-y-4">
        <h5 className="font-bold text-gray-300"> SUPPORT</h5>
        <p className="cursor-pointer">Our COVID-19 Response</p>
        <p className="cursor-pointer">Its a pretty awesome Clone</p>
        <p className="cursor-pointer">Help Centre</p>
        <p className="cursor-pointer">Cancellation options </p>
      </div>
    </div>
  );
}

export default Footer;
