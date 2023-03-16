import { Divider } from "antd";
import Card from "antd/lib/card/Card";
import React from "react";
import styled from "styled-components";
import { userProfile } from "./data";
import UserInfoBottomBox from "./UserInfoBottomBox";

export default function UserInfoBottom() {
  return (
    <Styled>
      <Card>
        {userProfile.map((ele, id) => {
          return (
            <React.Fragment key={id}>
              {id > 0 && <Divider />}
              <UserInfoBottomBox
                title={ele.title}
                updateFunc={ele.updateFunc}
                content={ele.content}
              />
            </React.Fragment>
          );
        })}
      </Card>
    </Styled>
  );
}

const Styled = styled.div``;
