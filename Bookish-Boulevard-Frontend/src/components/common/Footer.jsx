export default function Footer() {
  return (
    <div className="max-w-screen-2xl mx-auto min-w-[360px] gap-2 lg:max-h-[300px]">
      <div className="text-center">Bookish Boulevard</div>
      <div className="h-[calc(40vh-2rem)] grid grid-cols-2 md:flex md:flex-row md:justify-around gap-6 justify-items-center mx-auto">
        <div className="flex flex-col justify-around lg:max-h-[22vh]">
          <p>About Us</p>
          <p className="cursor-pointer">VISION</p>
          <p className="cursor-pointer">CAREERS</p>
          <p className="cursor-pointer">SERVICE T</p>
          <p className="cursor-pointer">SERVICE TERMS</p>
          <p className="cursor-pointer">DONATE</p>
        </div>
        <div className="flex flex-col justify-around lg:max-h-[22vh]">
          <p>Discover</p>
          <p className="cursor-pointer" >HOME</p>
          <p className="cursor-pointer" >BOOKS</p>
          <p className="cursor-pointer" >AUTHOR</p>
          <p className="cursor-pointer" >SUBJECT</p>
          <p className="cursor-pointer" >ADVANCE SEARCH</p>
        </div>
        <div className="flex flex-col justify-around lg:max-h-[22vh]">
          <p> My Account </p>
          <p className="cursor-pointer">SIGN IN</p>
          <p className="cursor-pointer">VIEW CART</p>
          <p className="cursor-pointer">MY WISHLIST</p>
          <p className="cursor-pointer">TRACK MY ORDER</p>
        </div>
        <div className="flex flex-col justify-around lg:max-h-[22vh]">
          <p>Help </p>
          <p className="cursor-pointer">HELP CENTER</p>
          <p className="cursor-pointer">REPORT A PROBLEM</p>
          <p className="cursor-pointer">CONTACT US</p>
        </div>
      </div>
    </div>
  );
}
