import React from 'react';

function App() {
    return (
        <div class="container">
            <div class="row">
                <h2 class="col-6">Fikra Camps Dashboard</h2>
                <h3 class="col-6"><b>The favorite dashboard in the area</b></h3>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="container">
                        <form>
                            <div class="form-group row">
                                <label for="inputName" class="col-sm-1-12 col-form-label">Username</label>
                                <div class="col-sm-1-12">
                                    <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Write your username here"></input>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputName" class="col-sm-1-12 col-form-label">Password</label>
                                <div class="col-sm-1-12">
                                    <input type="text" class="form-control" name="inputName" id="inputName" placeholder="Write your password here"></input>
                                </div>
                            </div>
                            <div class="form-group row pt-2">
                                <div class="">
                                    <button type="submit" class="btn btn-dark">Login</button>
                                    <label class="form-check-label pl-3">
                                        <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" checked></input>
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-6">
                    <img src="../assets/background.svg" class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle}" alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default App;
