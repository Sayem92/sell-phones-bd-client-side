import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import UseAdmin from "../api/UseAdmin";
import UseSeller from "../api/UseSeller";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../components/Sheared/Navbar/Navbar";
import Loading from "../Loading/Loading";

const DashBoardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = UseSeller(user?.email);
  const [isAdmin] = UseAdmin(user?.email);

  // console.log(user);
  if (isSellerLoading) {
    return <Loading></Loading>;
  }
//   className="text-white  bg-gray-500 md:bg-gray-400 mb-2 rounded-lg"
  // style
  const style = {
    color: "white" /* Equivalent to text-white */,
    backgroundColor: "#718096" /* Equivalent to bg-gray-500 */,
    "@media (min-width: 768px)": {
      /* Equivalent to md:bg-gray-400 */ backgroundColor: "#a0aec0",
    },
    marginBottom: "0.5rem" /* Equivalent to mb-2 */,
    borderRadius: "0.375rem" /* Equivalent to rounded-lg */,
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            {/* buyers only  */}

            {!isSeller && !isAdmin && (
              <li style={style}>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
            )}

            {/* seller only  */}

            {isSeller && (
              <>
                <li style={style}>
                  <Link to="/dashboard/addProduct">Add A Product</Link>
                </li>
                <li style={style}>
                  <Link to="/dashboard/myProducts">My Products</Link>
                </li>
                <label
                  htmlFor="dashboard-drawer"
                  className="md:hidden btn btn-info text-base-content"
                >
                  Close drawer
                </label>
              </>
            )}

            {/* admin only */}

            {isAdmin && (
              <>
                <li style={style}>
                  <Link to="/dashboard/allBuyers">All Buyers</Link>
                </li>
                <li style={style}>
                  <Link to="/dashboard/allSellers">All Sellers</Link>
                </li>

                <label
                  htmlFor="dashboard-drawer"
                  className="md:hidden btn btn-info text-base-content"
                >
                  Close drawer
                </label>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
