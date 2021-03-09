import React from 'react';
import './Perfect.css'
const Perfect = (props) => {
    return (
        <>


            <section className="section" >


                <div id="co14" className="col-md-4" >
                    <div className ="divone" ><img className="colimage" /><div className="paragraph"><p >{props.head}</p>
                        <p id="fonttext">{props.fonttext}   <i id="iconnns" class="fas fa-comments"></i><span> 20  </span>
                        </p>
                       
                        <div class="datte">
                            <time>02-03-2021</time>
                        </div>
                    </div> </div>

                </div>
                <div id="co14" className="col-md-4 " >
                    <div className ="divone"><img className="colimage2" /><div className="paragraph parra"><p >{props.head2}</p>
                        <p id="fonttext">{props.fonttext2}   <i id="i" class="fas fa-comments"></i><span> 20  </span>
                        </p>
                       
                        <div class="datte">
                            <time>02-03-2021</time>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="co14" className="col-md-4 " >
                    <div className ="divone"><img className="colimage3" /><div className="paragraph"><p >{props.head3}</p>
                        <p id="fonttext">{props.fonttext3}   <i id="iconnns" class="fas fa-comments"></i><span> 20  </span>
                        </p>
                       
                        <div class="datte">
                            <time>02-03-2021</time>
                        </div>
                    </div>
                    </div>
                </div>

            </section>
        </>
    )

}


export default Perfect;
