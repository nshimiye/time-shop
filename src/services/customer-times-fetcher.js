export class CTFService {
    // @TODO call backend api
    eventSource = null; 
    listen(cb) {
        if (!this.eventSource)
            this.eventSource = new EventSource('http://localhost:8000/events');

        const eventSource = this.eventSource;

        eventSource.addEventListener('message', event => {
            const data = JSON.parse(event.data);
            console.log('[system updates]', data);
            if (data.id) cb([data]);
        });
    }

    open() {
        const eventSource = this.eventSource;
        eventSource.addEventListener('error', event => {
            console.log('[event source error]', event);
        });

        eventSource.addEventListener('open', event => {
            console.log('[event source starts]', event);
        });
    }

    close() {
        const eventSource = this.eventSource;
        eventSource.close();
    }
}

export default new CTFService();
