import { Link, redirect } from "react-router-dom";

export default function Root() {
    const linktopage = () => {
       console.log('clicked');
       redirect('/contacts/1')
    }
    return (
      <>
        <div id="sidebar" className="bg-gray-200 w-32 p-2">
          <h1>React Router Contacts</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
              <button type="submit" className="bg-blue-500 w-12 h-6 rounded-sm" onClick={linktopage}>New</button>
          </div>
          <nav>
            <ul>
              <li>
                <Link to={`/contacts/1`}>Contact 1  </Link>
              </li>
              <li>
              <Link to={`/contacts/2`}>Contact 2</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
  