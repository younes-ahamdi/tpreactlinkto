import './FormTp.css';
import NotificationPreferences from '../pages/Notification';
import CitySelect from '../pages/City';
import CheckboxForm from '../pages/CheckboxForm';

function FormTp() {
  return (
    <div className="form-tp-app">
      <div className="form-tp-container">
        <NotificationPreferences />
        <CitySelect />
        <CheckboxForm />
      </div>
    </div>
  );
}

export default FormTp;
