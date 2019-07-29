import React from 'react';
import logo from './logo.svg';
import './App.css';

function Resume () {
    return (
        <main>
    <section>
      <h2> Education</h2>
      <ul>
        <li>University of connecticut</li>
      </ul>
    </section>
    <hr>
    <section>
      <h2>Employment History</h2>
      <ul>
        <li><strong>Company EFG</strong>
          <ul>
            <li><strong> Title:</strong> Programmer</li>
            <li><strong>Dates of Employment:</strong> 02/07/2018-05/05/2019</li>
            <li><strong>Job Description:</strong> Confirms project requirements by reviewing program objective, input data, and output requirements with analyst, supervisor, and client. Arranges project requirements in programming sequence by analyzing requirements; preparing a work flow chart and diagram using knowledge of computer capabilities, subject matter, programming language, and logic. Encodes project requirements by converting work flow information into computer language. Programs the computer by entering coded information. Confirms program operation by conducting tests; modifying program sequence and/or codes. Contributes to team effort by accomplishing related results as needed.</li>

          </ul>
        </li>

      </ul>
      <ul>
        <li><strong>Company ABC</strong>
          <ul>
            <li><strong>Job Title:</strong> Junior Programmer</li>
            <li><strong>Dates of Employment:</strong> 04/09/2016-02/07/2018</li>
            <li><strong>Job Description:</strong> Confirms project requirements by reviewing program objective, input data, and output requirements with analyst, supervisor, and client. Arranges project requirements in programming sequence by analyzing requirements; preparing a work flow chart and diagram using knowledge of computer capabilities, subject matter, programming language, and logic. Encodes project requirements by converting work flow information into computer language. Programs the computer by entering coded information. Confirms program operation by conducting tests; modifying program sequence and/or codes. Contributes to team effort by accomplishing related results as needed.</li>
          </ul>
        </li>

      </ul>
    </section>
    <hr>
    <section>
      <h2>Skills</h2>
      <table>
        <tr>
          <td>html</td>
          <td>⭐️⭐️⭐️</td>
        </tr>
        <tr>
          <td>css</td>
          <td>⭐️⭐️⭐️</td>
        </tr>
        <tr>
          <td>Photoghrapy</td>
          <td>⭐️⭐️⭐️⭐️</td>
        </tr>
      </table>
    </section>
  
  <hr>
  <address>
    <p><strong>Contact Info</strong>
      <p>
        <table>
          <tr>
            <td><img src="https://www.vyond.com/wp-content/uploads/2018/04/Megan_Creegan.jpg" alt="Sally picture"></td>
            <td>
              <ul>
                <li>
                  <p>Sally</p>
                </li>
                <li>
                  <p>sally420@gmail.com</p>
                </li>
                <li>
                  <p>(860)-911-911</p>
                </li>
              </ul>
            </td>
          </tr>
        </table>
  </address>
  <footer>
    <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
    <a href="https://twitter.com/" target="_blank">Twitter</a>
    <a href="https://www.facebook.com/" target="_blank">Facebook</a>
    <p>© 2019 Sally @ student</p>
  </footer>
  </main>
    );
}
export default Resume;