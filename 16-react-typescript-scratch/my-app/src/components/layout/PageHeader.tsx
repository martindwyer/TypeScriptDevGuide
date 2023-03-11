import React from 'react';
import logo from '../../assets/images/logo.svg';
import homePhoto from '../../assets/images/app-1.png';

type PageHeaderProps = {
  page: string;
  icon?: string;
};

export const PageHeader = (props: PageHeaderProps) => {
  const renderIcon = (icon: string): JSX.Element => {
    return <i className={icon}></i>;
  };
  return (
    <div className="page-header row">
      <div className="col-md-4 site-info">
        <div>
          <p className="page-header-title">
            <span className="logo-font">md</span> Web Technologies
          </p>
          <div className="col-md-6 jumbotron-header">
            <img src={logo} className="jumbotron-logo site-logo" alt="logo" />
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <h1 className="heading">{props.page}</h1>
        {props.icon ? renderIcon(props.icon) : null}
      </div>
      <div className="col-md-4 site-image">
        <img src={homePhoto} alt="home photo" className="img-fluid" />
      </div>
    </div>
  );
};
