import React from "react";
const serviceRows = [
  {
    id: "1",
    title: (
      <>
        Average <br /> solving time
      </>
    ),
    time: "13Sec",
  },
  {
    id: "2",
    title: (
      <>
        hCaptcha <br />
        Enterprise support
      </>
    ),
    status: true,
  },
  {
    id: "3",
    title: "Daily Updates",
    status: true,
  },
];
export default function Service() {
  return (
    <section className="service">
      <div className="auto__container">
        <div className="service__inner">
          <div className="service__inner-title">
            <h2>
              The <span>Best Service</span> Out There
            </h2>
          </div>
          <div className="serviceTable__wrapper">
            <table className="serviceTable">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className="serviceTable__icon">
                      <img src="/images/logos/1.svg" alt="" />
                    </div>
                  </th>
                  <th>
                    <div className="serviceTable__icon">
                      <img src="/images/logos/2.svg" alt="" />
                    </div>
                  </th>
                  <th>
                    <div className="serviceTable__icon">
                      <img src="/images/logos/3.svg" alt="" />
                    </div>
                  </th>
                  <th>
                    <div className="serviceTable__icon">
                      <img src="/images/logos/4.svg" alt="" />
                    </div>
                  </th>
                  <th>
                    <div className="serviceTable__icon">
                      <img src="/images/logos/5.svg" alt="" />
                    </div>
                  </th>
                  <th>
                    <div className="serviceTable__icon">
                      <img src="/images/logos/6.svg" alt="" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {serviceRows.map((item, index) => {
                  return <ServiceRow {...item} key={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
const ServiceRow = (props: any) => {
  return (
    <tr>
      <td>
        <p className="sm">{props.title}</p>
      </td>
      <td>{props.status ? <span></span> : <h5>{props.time}</h5>}</td>
      <td>{props.status ? <span></span> : <h5>{props.time}</h5>}</td>
      <td>{props.status ? <span></span> : <h5>{props.time}</h5>}</td>
      <td>{props.status ? <span></span> : <h5>{props.time}</h5>}</td>
      <td>{props.status ? <span></span> : <h5>{props.time}</h5>}</td>
      <td>{props.status ? <span></span> : <h5>{props.time}</h5>}</td>
    </tr>
  );
};
