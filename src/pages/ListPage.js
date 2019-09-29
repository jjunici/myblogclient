import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
const ListPage=({match})=>{
    const {page=1,tag}=match.params;
    return (
        <PageTemplate>
          {/*여기 에 넣는 값이 PageTemplate 컴포넌트의 children 프롭스로 들어간다*/}
          <ListWrapper>
             <ListContainer
                page={parseInt(page,10)}
                tag={tag}
                />
          </ListWrapper>
        </PageTemplate>
    );
};
export default ListPage;