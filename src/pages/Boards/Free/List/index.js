import React, { useState } from "react";
import { Margin } from "../../../../components/Module/Margin/styles";
import BoardBase from "../../../../components/common/BoardBase";
import { colors } from "../../../../config/globalColor";
import { GET_BOARD } from "../../../../api/api";

const SearchList = ({ searchResult }) => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <div>총 {searchResult.length} 건</div>
      <Margin H={10} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopStyle: "dashed",
          borderBottomWidth: 3,
          borderBottomStyle: "solid",
          height: 40,
        }}
      >
        <div style={{ flex: 0.2, display: "flex", justifyContent: "center" }}>
          카테고리
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          제목
        </div>
        <div style={{ flex: 0.2, display: "flex", justifyContent: "center" }}>
          작성자
        </div>
        <div style={{ flex: 0.2, display: "flex", justifyContent: "center" }}>
          조회수
        </div>
        <div style={{ flex: 0.2, display: "flex", justifyContent: "center" }}>
          등록 일시
        </div>
        <div style={{ flex: 0.2, display: "flex", justifyContent: "center" }}>
          수정 일시
        </div>
      </div>
      {/* 이 부분은 목서버 사용으로 인해 모든 데이터를 가지고 pagenation 구현 */}
      {searchResult.slice((page - 1) * 4, page * 4).map((item, idx) => {
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomStyle: "solid",
              height: 40,
            }}
          >
            <div
              style={{
                flex: 0.2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {item.category}
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              {item.title}
            </div>
            <div
              style={{ flex: 0.2, display: "flex", justifyContent: "center" }}
            >
              {item.name}
            </div>
            <div
              style={{ flex: 0.2, display: "flex", justifyContent: "center" }}
            >
              {item.view}
            </div>
            <div
              style={{ flex: 0.2, display: "flex", justifyContent: "center" }}
            >
              {item.created_at
                ? new Date(item.modified_at).toLocaleString()
                : "-"}
            </div>
            <div
              style={{ flex: 0.2, display: "flex", justifyContent: "center" }}
            >
              {item.modified_at
                ? new Date(item.modified_at).toLocaleString()
                : "-"}
            </div>
          </div>
        );
      })}
      <Margin H={100} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: 30,
            width: 1,
            borderRightWidth: 3,
            borderRightStyle: "dotted",
          }}
        ></div>
        <Margin H={10} />
        <div>123</div>
      </div>
    </div>
  );
};

const List = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState({});

  const handleSearch = async () => {
    GET_BOARD()
      .then((res) => {
        setIsSearched(true);
        if (searchText === "없음") {
          setSearchResult([]);
        } else {
          setSearchResult(res);
        }
      })
      .catch((e) => {});
  };

  return (
    <BoardBase>
      <Margin H={5} />
      <div>자유 게시판 - 목록</div>
      <Margin H={40} />
      <div
        style={{
          borderColor: colors.BLACK,
          borderStyle: "solid",
          borderWidth: 1,
          padding: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>등록일</div>
        {/* <div>캘린더</div> */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              borderColor: colors.BLACK,
              borderStyle: "solid",
              borderWidth: 1,
              padding: 5,
            }}
          >
            전체 카테고리
            {/* todo: selector로 만들기 */}
          </div>
          <Margin W={3} />
          <input
            style={{ height: 30 }}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDownCapture={(ev) => {
              const keyCode = ev.nativeEvent.code;
              if (keyCode === "Enter") {
                handleSearch();
              }
            }}
          />
          <button
            style={{
              borderColor: colors.BLACK,
              borderStyle: "solid",
              borderWidth: 1,
              padding: 5,
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onClick={handleSearch}
          >
            검색
          </button>
          <Margin W={30} />
        </div>
      </div>
      <Margin H={30} />

      {isSearched ? <SearchList searchResult={searchResult} /> : null}
      <Margin H={40} />
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          style={{
            borderColor: colors.BLACK,
            borderStyle: "solid",
            borderWidth: 1,
            padding: 5,
            paddingLeft: 30,
            paddingRight: 30,
          }}
        >
          등록
        </button>
      </div>
    </BoardBase>
  );
};
export default List;
