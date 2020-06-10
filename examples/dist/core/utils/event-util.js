class EventUtil {
  emit(component, eventName, detail) {
    component.triggerEvent(eventName, detail, {
      bubbles: true,
      composed: true,
      capturePhase: true
    });
  }
}

const eventUtil = new EventUtil();
export default eventUtil;
