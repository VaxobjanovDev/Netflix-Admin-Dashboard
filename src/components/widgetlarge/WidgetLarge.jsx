import "./WidgetLarge.css";

const WidgetLarge = () => {
  const Button = ({ type }) => {
    return <button className={"button + " + type}>{type}</button>;
  };

  return (
    <div className="widget__large">
      <h3 className="widget__title">Latest transactions</h3>
      <table className="widget__large-table">
        <tbody>
          <tr className="widget__large-tr">
            <th className="widget__large-th">Customer</th>
            <th className="widget__large-th">Date</th>
            <th className="widget__large-th">Amount</th>
            <th className="widget__large-th">Status</th>
          </tr>
          <tr className="widget__large-tr">
            <td className="user-box">
              <img
                className="user-img"
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="asdas"
              />
              <span className="name">Aletta Ocean</span>
            </td>
            <td className="date">01 02 2200</td>
            <td className="amount">$199</td>
            <td className="status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widget__large-tr">
            <td className="user-box">
              <img
                className="user-img"
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="asdas"
              />
              <span className="name">Aletta Ocean</span>
            </td>
            <td className="date">01 02 2200</td>
            <td className="amount">$199</td>
            <td className="status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widget__large-tr">
            <td className="user-box">
              <img
                className="user-img"
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="asdas"
              />
              <span className="name">Aletta Ocean</span>
            </td>
            <td className="date">01 02 2200</td>
            <td className="amount">$199</td>
            <td className="status">
              <Button type="Approved" />
            </td>
          </tr>
          <tr className="widget__large-tr">
            <td className="user-box">
              <img
                className="user-img"
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="asdas"
              />
              <span className="name">Aletta Ocean</span>
            </td>
            <td className="date">01 02 2200</td>
            <td className="amount">$199</td>
            <td className="status">
              <Button type="Pending" />
            </td>
          </tr>
          <tr className="widget__large-tr">
            <td className="user-box">
              <img
                className="user-img"
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="asdas"
              />
              <span className="name">Aletta Ocean</span>
            </td>
            <td className="date">01 02 2200</td>
            <td className="amount">$199</td>
            <td className="status">
              <Button type="Declined" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLarge;
