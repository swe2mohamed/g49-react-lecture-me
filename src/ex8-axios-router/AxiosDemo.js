import React, { useState } from "react";
import axios from "axios";

const AxiosDemo = () => {
  const [bookings, setBookings] = useState([]);

  const baseUrl = "http://localhost:8080";

  const getBookingClickHandler = async () => {
    console.log("Start");
    await axios
      .get(baseUrl + "/api/v1/booking/from/2024-08-13/to/2024-08-15")
      .then((response) => {
        console.log("Response: ", response);
        if (response.status === 200) {
          console.log("Data ", response.data);
          setBookings(response.data);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
    console.log("End");
  };
  const bookBookingClickHandler = async (id, email) => {
    await axios
      .post(baseUrl + "/api/v1/booking/book", { id: id, email: email })
      .then((response) => {
        console.log("Response: ", response);
      })
      .catch((error) => {
        console.log("Error: ", error);
        if(error.response.status ===400){
          console.log(error.response.data)
        }
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-info"
            type="button"
            onClick={getBookingClickHandler}
          >
            Get Bookings
          </button>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          {bookings && bookings.length !== 0 && (
            <h2 className="mb-4"> Bookings List</h2>
          )}
          <div className="row">
            {bookings.map((booking) => (
              <div key={booking.id} className="card mb-4 col-md-3">
                <div className="card-body">
                  <h5 className="card-title">{booking.dateTime}</h5>
                </div>
                <div className="d-grid card-footer">
                  <button
                    type="button"
                    className={`btn btn-${booking.booked ? "danger" : "success"}`}
                    onClick={() =>
                      bookBookingClickHandler(booking.id, "test4@gmail.com")
                    }
                    disabled={booking.booked}
                  >
                    {booking.booked ? "Booked" : "Available"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AxiosDemo;
