import { http } from './http'; 
import './websocket/client';
import './websocket/admin';

http.listen(8000, () => console.log('Server running port 8000'));