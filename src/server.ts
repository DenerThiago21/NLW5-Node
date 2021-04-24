import { http } from './http'; 
import './websocket/client';

http.listen(8000, () => console.log('Server running port 8000'));