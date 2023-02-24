import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateResult } from '../redux/action';

const Booking = () => {
    const [result, setResult] = useState({   
        from: "",
        to: "",
        date: "",
        guests: "",
        class:""

    })
 const dispatch= useDispatch()
 const resultsNumber = useSelector((state) => state.result.length);
 
    const submitList = (e) => {
        e.preventDefault()
       dispatch(updateResult(result))
    }

    return (
        <div class="mt-[160px] mx-4 md:mt-[160px] relative">
      <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form  onSubmit={submitList} class="first-hero lws-inputform">
          {/* <!-- From --> */}
          <div class="des-from">
            <p>Destination From</p>
            <div class="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select onChange={(e) => setResult({ ...result, from: e.target.value })} class="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div class="des-from">
            <p>Destination To</p>
            <div class="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select onChange={(e) => setResult({ ...result, to: e.target.value })} class="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div class="des-from">
            <p>Journey Date</p>
            <input onChange={(e) => setResult({ ...result, date: e.target.value })} type="date" class="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
          </div>

          {/* <!-- Guests --> */}
          <div class="des-from">
            <p>Guests</p>
            <div class="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select onChange={(e) => setResult({ ...result, guests: e.target.value })} class="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div class="des-from !border-r-0">
            <p>Class</p>
            <div class="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select onChange={(e) => setResult({ ...result, class: e.target.value })} class="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button disabled={resultsNumber + 1 >  3 }  class="addCity" type="submit" id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span class="text-sm">Book</span>
          </button>
          {resultsNumber + 1 >  3 && <p className='textCenter'>You can't go for more then three. Thanks.</p>}
        </form>
      </div>
    </div>
    );
};

export default Booking;