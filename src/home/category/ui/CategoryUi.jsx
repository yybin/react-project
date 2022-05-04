import React from "react";
import {CategoryWrap, NavUl} from './StyledCategoryUi'
import Search from '@/components/search/Search'
import Menu from './Menu'
const CategoryUi = (props) => {
    const { type, onCategoryUiClick } = props
    return (
        <CategoryWrap>
          <nav>
              <NavUl 
                color = "#fff"
                width = "1px"
                radius = {0.15}
              >
                  <li className={type === 'category' ? 'active': ''} onClick={onCategoryUiClick('category')}>分类</li>
                  <li className={type === 'material' ? 'active': ''} onClick={onCategoryUiClick('material')}>食材</li>
                  <li className={`slide ${type === 'category' ? '': 'right'}`}></li>
              </NavUl>
          </nav>
          <Search 
            outerBg="#fff"
            innerBg = "#efefef"
            hasborder={false}
            radius={0.06}
            ></Search>
            <Menu 
             type={ type}
             {...props}
            ></Menu>
      </CategoryWrap>
    )
}

export default CategoryUi