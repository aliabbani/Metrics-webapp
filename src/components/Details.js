import { useLocation } from 'react-router-dom';
import '../stylesheet/details.css';
import { MdCoronavirus } from 'react-icons/md';

const Details = () => {
  const location = useLocation();
  let { data } = location;
  if (!data) {
    data = JSON.parse(localStorage.getItem('data'));
  } else {
    localStorage.setItem('data', JSON.stringify(data));
  }

  return (
    <>
      <div key={data.id}>
        <div className="details-header">
          <div className="details-header-left">
            <MdCoronavirus className="details-header-icon" />
          </div>
          <div className="details-header-right">
            <h1 className="details-header-h1">{data.name}</h1>
            <h4 className="details-header-h4">{data.today_confirmed.toLocaleString()}</h4>
          </div>
        </div>

        <h5 className="details-home-title">CASES STATISTIC BREAKDOWN </h5>

        <div>
          <div className="case1">
            <div>Today Confirmed</div>
            <div>
              {data.today_confirmed.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case2">
            <div>Today Deaths</div>
            <div>
              {data.today_deaths.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case1">
            <div>Today New Confirmed</div>
            <div>
              {data.today_new_confirmed.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case2">
            <div>Today New Deaths</div>
            <div>
              {data.today_new_deaths.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case1">
            <div>Today New Open Cases</div>
            <div>
              {data.today_new_open_cases.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case2">
            <div>Today New Recovered</div>
            <div>
              {data.today_new_recovered.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case1">
            <div>Today Open Cases</div>
            <div>
              {data.today_open_cases.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case2">
            <div>Today Recovered</div>
            <div>
              {data.today_recovered.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case1">
            <div>Yesterday Confirmed</div>
            <div>
              {data.yesterday_confirmed.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case2">
            <div>Yesterday Deaths</div>
            <div>
              {data.yesterday_deaths.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
          <div className="case1">
            <div>yesterday Open Cases</div>
            <div>{data.yesterday_open_cases.toLocaleString()}</div>
          </div>
          <div className="case2">
            <div>Yesterday Recovered</div>
            <div>
              {data.yesterday_recovered.toLocaleString()}
              {' '}
              cases
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
