import Navbar from "../../molecules/Navbar/Navbar";
import styled from "styled-components";

type SidebarProps = {
  menuItems: { name: string; route: "#"; icon: React.ReactNode }[];
};

const Sidebar = (props: SidebarProps) => {
  return (
    <StyledSidebar>
      <div>
        <div className="sidebar-logo-link">
          <img src="https://www.satek.ir/static/media/Sateklogo.32dfd236.svg" />
        </div>
      </div>
      <Navbar menuItems={props.menuItems} />
    </StyledSidebar>
  );
};

export default Sidebar;

const StyledSidebar = styled.aside`
  height: 100vh;
  width: 6vw;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  /* padding-top: 1rem; */
  background-color: #4579dc;
  border-radius: 3rem 0 0 0;

  .nav-list {
    flex-direction: column;
    margin: 0;
    gap: 0.4rem;
    height: 100%;
  }

  .nav-item {
    width: 100%;

    &:last-of-type {
      margin-top: auto;
      margin-bottom: 2rem;
    }

    a {
      width: 100%;
      margin: 0 auto;
      padding: 1rem 0;
      flex-direction: column;
      font-size: 1rem;
      gap: 0.3rem;
      svg {
        width: 100%;
        height: 3rem;
        border: 3px solid transparent;
      }
    }
    a:hover {
      color: #fff;
      border-bottom: 3px solid transparent;

      svg {
        border-right: 3px solid #fff;
      }
    }
  }
  .sidebar-logo-link {
    margin-top: 0.5rem;
    img {
      height: 3rem;
      width: 100%;
      margin: 1rem 0 2rem 0;
      padding: 0.5rem auto;
      border: 3px solid transparent;
    }
  }
  .sidebar-help-link {
    margin-top: 25rem;
  }
  .sidebar-help-link:hover {
    color: #fff;
    border-bottom: 3px solid transparent;
    svg {
      border-right: 3px solid #fff;
    }
  }
`;
