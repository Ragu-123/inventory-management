const NavBar = () => {
    return (
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <div className="flex items-center text-white">
            <img className="w-8 h-8 mr-2" src="/inventoryLogo.png" alt="LOGO" />
            <h2 className="text-lg font-bold">Inventory Management</h2>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
            </a>
            <a href="/cart" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Cart
            </a>
            <a href="/inventory" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Inventory
            </a>
            <a href="/sales" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sales
            </a>
            <a href="/add-product" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Add Product
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
export default NavBar;