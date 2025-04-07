const Menu = ({ menuItems }) => {
  return (
    <div className="bg-yellow-100 py-10 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item, idx) => (
          <div key={idx} className="text-center text-gray-800">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-md shadow-md mb-3"
            />
            <div className="flex justify-between items-center px-4">
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-sm font-semibold">Rs {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
