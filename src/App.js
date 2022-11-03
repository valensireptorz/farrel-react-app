import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <div className="Foto">
        <img src="foto.jpg" />
      </div>
      <div className="Deskripsi">
        <p className="Cate">  Air Force 1</p>
        <h1 className="Title">Disc Up to 30%</h1>
        <p className="Price">Rp. 1.500.000</p>
        <p className="Info">
        Air Force 1
An icon on the streets, the Nike Air Force 1 is among the most popular footwear designs of all time. 
The Air Force 1 Low, Air Force 1 Mid, and Air Force 1 High in all of its classic looks and latest collaborations are here.
        </p>
        <h3 className="Type">Type</h3>
        <div className="Tipe">
          <button className="White of white">White of white</button>
          <button className="Black and white">Black and white</button>
          <button className="Off-white-white">Off-white-white</button>
          <button className="jewel NYC cool grey">jewel NYC cool grey</button>
        </div>
        <h3 className="Size">Size</h3>
        <div className="Ukuran">
          <button className="39">39</button>
          <button className="42">42</button>
          <button className="43">43</button>
          <button className="44">44</button>
        </div>
        <button className="Beli">Buy Now</button>
        <button className="Wish">Add To Wishlist</button>
      </div>
    </div>
  );
}

export default App;