const Footer = () => {
    return ( 
        <div>
<footer className="container mx-auto mt-6 bg-[#093A4B] mt-10 pt-10 pb-20 mb-10">
  <div className="md:flex md:items-center relative">
    <div className="md:w-1/5 md:mr-8 ms-6 ps-5">
      <img src="/img/logo1.png" alt="Description of the image" />
      <p className="text-white">
        An excerpt about Wenigro Limited
      </p>
    </div>
    <div className="md:w-1/6 md:mr-8">
      <h4 className="text-white">About Wenigro</h4>
      <p className="text-white">FAQ</p>
      <p className="text-white">Contact Us</p>
      <p className="text-white">Blogs</p>
    </div>
    <div className="md:w-1/6 md:mr-8">
      <h4 className="text-white">Product</h4>
      <p className="text-white">Wenigro Power</p>
      <p className="text-white">Agrotechnology</p>
    </div>
    <div className="shared-background md:w-1/6 md:mr-8 relative" style={{ backgroundImage: `url(/img/footer-img.png)` }}>
      <h4 className="text-white">Quick Links</h4>
      <p className="text-white">Home</p>
      <p className="text-white">About</p>
      <p className="text-white">Blog</p>
    </div>
    <div className="shared-background" style={{ backgroundImage: `url(/img/footer-img.png)` }}>
      <h4 className="text-white">Quick Links</h4>
      <p className="text-white">Home</p>
      <p className="text-white">About</p>
      <p className="text-white">Blog</p>
    </div>
  </div>
</footer>




        </div>
     );
}
 
export default Footer;