import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,          // virtual users
  duration: '10s', // test duration
};

export default function () {
  const res = http.get('https://uphq.iihdev.com/login');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1); // think time between iterations
}