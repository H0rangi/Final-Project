import React from 'react';

function Schedule() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Zyzz Gym Schedule</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Day</th>
            <th style={styles.th}>Open</th>
            <th style={styles.th}>Close</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>Monday</td>
            <td style={styles.td}>6:00 AM</td>
            <td style={styles.td}>10:00 PM</td>
          </tr>
          <tr>
            <td style={styles.td}>Tuesday</td>
            <td style={styles.td}>6:00 AM</td>
            <td style={styles.td}>10:00 PM</td>
          </tr>
          <tr>
            <td style={styles.td}>Wednesday</td>
            <td style={styles.td}>6:00 AM</td>
            <td style={styles.td}>10:00 PM</td>
          </tr>
          <tr>
            <td style={styles.td}>Thursday</td>
            <td style={styles.td}>6:00 AM</td>
            <td style={styles.td}>10:00 PM</td>
          </tr>
          <tr>
            <td style={styles.td}>Friday</td>
            <td style={styles.td}>6:00 AM</td>
            <td style={styles.td}>10:00 PM</td>
          </tr>
          <tr>
            <td style={styles.td}>Saturday</td>
            <td style={styles.td}>8:00 AM</td>
            <td style={styles.td}>8:00 PM</td>
          </tr>
          <tr>
            <td style={styles.td}>Sunday</td>
            <td style={styles.td}>8:00 AM</td>
            <td style={styles.td}>8:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f4f4f4',
  },
  td: {
    padding: '10px',
    border: '1px solid #ddd',
  },
};

export default Schedule;
