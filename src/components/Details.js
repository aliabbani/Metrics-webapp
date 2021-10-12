import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  console.log('this is LOCATION', location);
  let { data } = location;
  if (!data) {
    data = JSON.parse(localStorage.getItem('data'));
  } else {
    localStorage.setItem('data', JSON.stringify(data));
  }

  return (
    <>
      <div>
        <>
          <div key={data.id}>
            <div>
              <h1>{data.name}</h1>
              <h4>{data.today_confirmed}</h4>
            </div>
            <h5>CASES STATISTIC BREAKDOWN </h5>
            <div>
              <div>Today Confirmed</div>
              <div>
                <div>{data.today_confirmed}</div>
              </div>
              <div>Today Deaths</div>
              <div>
                <div>{data.today_deaths}</div>
              </div>
              <div>Today Open Cases</div>
              <div>
                <div>{data.today_open_cases}</div>
              </div>
              <div>Today recovered</div>
              <div>
                <div>{data.today_recovered}</div>
              </div>
              <div>Yesterday Confirmed</div>
              <div>
                <div>{data.yesterday_confirmed}</div>
              </div>
              <div>Yesterday Deaths</div>
              <div>
                <div>{data.yesterday_deaths}</div>
              </div>
              <div>yesterday Open Cases</div>
              <div>
                <div>{data.yesterday_open_cases}</div>
              </div>
              <div>Yesterday Recovered</div>
              <div>
                <div>{data.yesterday_recovered}</div>
              </div>
            </div>
          </div>
        </>
      </div>

    </>
  );
};

export default Details;
