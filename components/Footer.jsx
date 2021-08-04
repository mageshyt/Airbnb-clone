function Footer() {
  return (
    <div className="grid grid-cols-1  md:grid-cols-4   gap-y-10 py-14 px-32 bg-gray-100 text-gray-600">
      {/* About */}
      <div className="space-y-4">
        <h5 className="font-bold text-gray-800"> About</h5>
        <p>How Airbnb Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
      </div>
      {/* Community */}
      <div className="space-y-4">
        <h5 className="font-bold"> COMMUNITY</h5>
        <p>Diversity & Belonging</p>
        <p>Its a pretty awesome Clone</p>
        <p>Referrals accepted</p>
        <p>Papa React </p>
      </div>
      {/* Host */}
      <div className="space-y-4">
        <h5 className="font-bold"> HOST</h5>
        <p>Host your home</p>
        <p>Host an Online Experience</p>
        <p>Responsible hosting</p>
        <p>Host an Experience</p>
      </div>
      {/* Support */}
      <div className="space-y-4">
        <h5 className="font-bold"> SUPPORT</h5>
        <p>Our COVID-19 Response</p>
        <p>Its a pretty awesome Clone</p>
        <p>Help Centre</p>
        <p>Cancellation options </p>
      </div>
    </div>
  );
}

export default Footer;
