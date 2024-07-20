import EventForm from '../components/EventForm';

function NewEventPage() {
  console.log('new Event')
  return <EventForm method="post" />;
}

export default NewEventPage;

