import Order from './Order'

const Main = ({orders}) => {
  return (
    <main>
      <h1>Dashoard</h1>
      <div className="date">
        <input type="date" />
      </div>
      <div className="insights">
        <div className="sales">
          <span className="material-icons-sharp">analytics</span>
          <div className="middle">
            <div className="left">
              <h3>Total Sales</h3>
              <h1>$25,024</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36} />
              </svg>
              <div className="number">
                <p>81%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/*---------- END OF SALES ------------*/}
        <div className="expenses">
          <span className="material-icons-sharp">bar_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Expenses</h3>
              <h1>$14,160</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36} />
              </svg>
              <div className="number">
                <p>62%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/*---------- END OF EXPENSES ------------*/}
        <div className="income">
          <span className="material-icons-sharp">stacked_line_chart</span>
          <div className="middle">
            <div className="left">
              <h3>Total Income</h3>
              <h1>$10,864</h1>
            </div>
            <div className="progress">
              <svg>
                <circle cx={38} cy={38} r={36} />
              </svg>
              <div className="number">
                <p>44%</p>
              </div>
            </div>
          </div>
          <small className="text-muted">Last 24 Hours</small>
        </div>
        {/*---------- END OF INCOME ------------*/}
      </div>
      {/*---------- END OF INSIGHTS ------------*/}
      <div className="recent-orders">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Number</th>
              <th>Payment</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <Order  key = {index} order = {order} />
            ))}
          </tbody>
        </table>
        <a href="https://magic.reactjs.net/htmltojsx.htm">Show All</a>
      </div>
    </main> 
  )
}
  
export default Main