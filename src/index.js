import React, { PropTypes } from 'react';
import calculatePageNumbers from './calculatePageNumbers';


export default class DogEar extends React.Component {
  static get propTypes() {
    return {
      current: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired,
      maxItems: PropTypes.number,
      leading: PropTypes.number,
      trailing: PropTypes.number,
      hrefForPage: PropTypes.func.isRequired,
      itemPropsWhenCurrent: PropTypes.object.isRequired,
			Item: PropTypes.any, 
    };
  }

  static get defaultProps() {
    return {
      maxItems: 25,
      leading: 3,
      trailing: 6,
			Item: 'a'
    };
  }

  render() {
    const pageNumbers = calculatePageNumbers(this.props);
    const { current, hrefForPage, itemPropsWhenCurrent, Item } = this.props;

    return (
      <nav>
        {
          pageNumbers.map(pageNumber => (
            <Item
								key={ pageNumber }
                href={ hrefForPage(pageNumber) }
                { ...(current === pageNumber ? itemPropsWhenCurrent: {} ) }
            >
              { pageNumber }
            </Item>
          ))
        }
      </nav>
    );
  }
}
