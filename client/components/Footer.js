import React from 'react';

const Footer = () => (
  <div className="footer">
    <table>
      <tbody>
        <tr style={{ display: 'inline-block' }}>
          <td>
            <a href="" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-github"></i>
              </span>
            </a>
            <a href="" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-linkedin"></i>
              </span>
            </a>
            <a href="" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-npm"></i>
              </span>
            </a>
            <a href="" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-instagram-square"></i>
              </span>
            </a>
            <a
              href=""
              target="_blank"
            >
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-youtube-square"></i>
              </span>
            </a>
            <a href="" target="_blank">
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-twitter"></i>
              </span>
            </a>
            <a
              href=""
              target="_blank"
            >
              <span
                style={{ fontSize: '3em', color: 'black', padding: '0 4px' }}
              >
                <i className="link fab fa-facebook-square"></i>
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <div style={{ border: '1px solid lightgrey' }} />
    <br />
    <div>© {new Date().getFullYear()} Grasfam</div>
    <br />
  </div>
);

export default Footer;
