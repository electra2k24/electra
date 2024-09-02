import './index.css'

const EventDetail = (props) => {
    console.log(props.useParams);
    return (
      <div className="eventDetail-bg-container">
        <div className='eventDetail'>
                <div>
                    <h1>Event Name</h1>
                </div>
                <div>
                    <p>Event Description</p>
                </div>
                <div>

                </div>
        </div>
      </div>
    );
};

export default EventDetail