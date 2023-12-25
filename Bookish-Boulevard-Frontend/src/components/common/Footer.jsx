
export default function Footer() {
  return (
    <>
    <div className="text-center">Bookish Boulevard</div>
    <div className="h-[40vh] grid grid-cols-2 md:flex md:flex-row md:justify-around gap-6 justify-items-center mx-auto">
        <div className="flex flex-col justify-around">
          <p>About Us</p>

          <p className="cursor-pointer">VISION</p>
          <p className="cursor-pointer">CAREERS</p>
          <p className="cursor-pointer">SERVICE T</p>
          <p className="cursor-pointer">SERVICE TERMS</p>
          <p className="cursor-pointer">DONATE</p>
        </div>
        <div className="flex flex-col justify-around">
          <p>Discover</p>
          <p>HOME</p>
          <p>BOOKS</p>
          <p>AUTHOR</p>
          <p>SUBJECT</p>
          <p>ADVANCE SEARCH</p>
        </div>
        <div className="flex flex-col justify-around">
          <p> My Account </p>
          <p>SIGN IN</p>
          <p>VIEW CART</p>
          <p>MY WISHLIST</p>
          <p>TRACK MY ORDER</p>
        </div>
        <div className="flex flex-col justify-around">
          <p>Help </p>
          <p>HELP CENTER</p>
          <p>REPORT A PROBLEM</p>
          <p>CONTANCT US</p>
        </div>
      </div>
    </>
  );
}
