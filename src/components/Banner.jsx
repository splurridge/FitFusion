function Banner() {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Get the best part of your day. <br />{" "}
          <span className="text-purple-600">You fit here.</span>
        </h1>
        <h6 className="font-light text-lg mb-6">
          We provide serious fitness but within a fun and friendly, safe space.
        </h6>
        <button className="font-bold bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition-colors">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
