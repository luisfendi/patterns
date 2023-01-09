class EventObserver {
  constructor() {
    this.observers = []
  }

  subscribe(fn) {
    this.observers.push(fn)
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(subscriber => subscriber !== fn)
  }

  broadcast(data) {
    this.observers.forEach(subscriber => subscriber(data))
  }
}

const observer = new EventObserver();

const textArea = document.querySelector('.textField');
const output = document.querySelector('.countField');


observer.subscribe(data => {
  console.log('subscribe for module 1 fired', data)
})

observer.subscribe(data => {
  output.innerText = data.trim().split(' ').length
})

textArea.oninput = () => {
  observer.broadcast(textArea.value)
}