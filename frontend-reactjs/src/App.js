
import './App.css';
import React, { useContext, useEffect, useState } from "react";
function App() {

const [form,setform] = useState({
  email:'',
pass:'',
cpass:'',

})
console.log(form);
function handleformchange(e){
setform({...form,[e.target.name]:e.target.value});
}
  return (
    <div className="App">

<form className ='container'>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={form.email} onChange={handleformchange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="pass" className="form-label">Password</label>
    <input  name='pass'type="password" className="form-control" id="pass"  value={form.pass} onChange={handleformchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="pc" className="form-label">Password confirm</label>
    <input name='cpass' type="password" className="form-control" id="pc"  value={form.cpass}onChange={handleformchange} />
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

    </div>
  );
}

export default App;
