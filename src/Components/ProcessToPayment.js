import React from 'react'
import Subtotal from '../Subtotal'

const ProcessToPayment = () => {
  return (
          <div className="checkout-right">
              <div className="userInfo">
                  <div className="required-info">
                      <h4>Shipping address</h4>
                      <input type="text" onChange={(e) => e.target.value} required />
                  </div>
                  <div className="required-info">
                      <h4>Contact number</h4>
                      <input type="tel" required />
                  </div>
                  <div className="required-info">
                      <h4>Email</h4>
                      <input type="email" required placeholder='xyz@userEmail.com' />
                  </div>
                  <div className="required-info">
                      <h4>Zip number</h4>
                      <input type="tel" name="" id="" />
                  </div>
                  <div className="required-info state-disct">
                      <div className="state-disct-input  state">
                          <h4>State</h4>
                          <select name='stateOption' id='stateOption'>
                              <option value="States" selected>Select state</option>
                              <option value="States">Andhra Pradesh</option>
                              <option value="States" >Arunachal Pradesh</option>
                              <option value="States" >Assam</option>
                              <option value="States" >Bihar</option>
                              <option value="States" >Chhattisgarh</option>
                              <option value="States" >Goa</option>
                              <option value="States" >Gujrat</option>
                              <option value="States" >Haryana</option>
                              <option value="States" >Himachal Pradesh</option>
                              <option value="States" >Jharkhand</option>
                              <option value="States" >Karnataka</option>
                              <option value="States" >Kerala</option>
                              <option value="States" >Madhya Pradesh</option>
                              <option value="States" >Maharashtra</option>
                              <option value="States" >Manipur</option>

                          </select>
                      </div>

                      <div className=" state-disct-input disct">
                          <h4>Dist</h4>
                          <input type="text" onChange={(e) => e.target.value} />
                      </div>
                  </div>

                  <div className="payment-option state-disct">
                      <div className="online-ofline online">
                          <input type="checkbox" /><span>Case on delivery</span>
                      </div>
                      <div className="online-ofline ofline">
                          <input type="checkbox" /><span>
                              Through UPI
                          </span>
                      </div>
                  </div>
              </div>
              <Subtotal />
          </div>
  )
}

export default ProcessToPayment
