import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import Responsive from '../common/Responsive';
import Profile from 'assests/Profile.png';
import Like from 'assests/likee.png';
import Scrap from '../../assests/commentt.png';

const PostViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const InfoBox = styled.div`
  span + span: {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
`;

const ProfileBox = styled.div`
  & + & {
    margin-left: 0.5rem;
  }
`;

const SubInfo = styled.div`
  margin-top: 1rem;
  position: relative;
  & + & {
    margin-left: 0.5rem;
  }
  color: ${palette.gray[6]};
  .profileImg {
    top: 1x;
    left: 3px;
    position: absolute;
  }
  .author {
    top: 1x;
    left: 50px;
    position: absolute;
    margin-bottom: 0.3rem;
  }
  .date {
    top: 20px;
    left: 50px;
    position: absolute;
    margin-bottom: 0.3rem;
  }
/* span 사이에 가운뎃점 문자 보여 주기 /
  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\B7'; / 가운뎃점 문자 */
  }
`;

const Tags = styled.div`
  margin-top: 1.5rem;
  
  .tag {
    display: inline-block;
    color: #5BA3AD;
    text-decoration: none;
    margin-right: 0.5rem;
    textAlign: 'right';
    &amp;:hover {
      color: ${palette.gray[6]};
    }
  }
  `;
const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
  padding-bottom: 3rem;
`;
const ReplyBox = styled.div`
  padding-top: 5rem;
  margin-right: 5rem;
  padding-bottom: 10rem;
`;

const ReplyForm = styled.form`
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 900px;
  height: 80px;
  margin-left: 40px;

  border: 1px solid ${palette.gray[2]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: #c5ad81;
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[6]};
    }
  }
`;

const ReplyButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
  }
  background-color: #c5ad81;
`;

const ReactionBox = styled.div`
  position: relative;
  margin-left: 0px;
  padding-left: 0rem;
  padding-top: 2rem;
  .Like {
    left: 0.1px;
    position: absolute;
  }
  .Scrap {
    left: 140px;
    position: absolute;
  }
  padding-bottom: 5rem;
  border-bottom: 1px solid ${palette.gray[2]};
`;

const LikeBox = styled.div`
  width: 50px;
`;

const ScrapBox = styled.div``;

const LikeButton = styled(Button)`
  cursor: pointer;
  padding-right: 1rem;
  padding-left: 1rem;
  border: none;
  height: 3.5rem;
  witdh: 2rem;
  background: white;
  color: gray;
  border: 1px solid ${palette.gray[2]};
  font-weight: bold;
  &:hover {
    background: white;
  }
`;

const ScrapButton = styled(Button)`
  cursor: pointer;
  padding-right: 1rem;
  padding-left: 1rem;
  border: none;
  height: 3.5rem;
  witdh: 2rem;
  background: white;
  color: gray;
  border: 1px solid ${palette.gray[2]};
  font-weight: bold;
  &:hover {
    background: white;
  }
`;

const PostViewer = ({ onPublish }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);
  const onChange = useCallback(e => {
    setInput(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      setInput(''); // input 초기화
    },
    [input],
  );

  return (
    <PostViewerBlock>
      <PostHead>
        <h1>제목</h1>

        <SubInfo>
          <div className="profileImg">
            {' '}
            <ProfileImg src={Profile} />
          </div>
          <div className="author">
            <b>tester </b>
          </div>
          <div className="date">{new Date().toLocaleDateString()}</div>
        </SubInfo>

        <div style={{ textAlign: 'right' }}>
          <Tags>
            <div className="tag">#영화 </div>
          </Tags>
        </div>
      </PostHead>
      <PostContent
        // dangerouslySetInnerHTML={{ __html: '<p>HTML <b>내용</b>입니다. [수원=뉴시스]박상욱 기자 = 고령사회(65세 이상 인구 비율 14% 이상)에 진입한 경기도가 오는 15일 노인학대 예방의 날을 앞두고 다양한 노인 보호정책을 추진 중이다. 13일 도에 따르면 올해 5월 말 기준 경기도의 65세 이상 노인인구는 192만9000여 명으로 도내 전체 인구 대비 14.2%를 차지한다. 이는 지난해 5월 말 13.5%(181만8000여 명) 대비 0.7%p 상승한 것으로, 국내 평균(2018년)보다 3년여 늦게 고령사회에 진입했다. 올해 국내 노인인구 비율은 17.5%다. 노인인구 증가와 함께 노인학대 신고 건수도 2019년 2445건, 2020년 2592건, 2021년 2881건으로 늘고 있다. 이에 따라 도는 노인학대 대응 관련 예산을 2020년 20억 원에서 2022년 48억 원으로 2.4배 증액하는 등 노인학대 예방에 총력을 기울이고 있다. 현재 도내 노인보호전문기관 5곳(수원, 성남, 부천, 의정부, 고양), 학대피해노인 전용쉼터 2곳(부천, 의정부)를 운영하는 등 전국 최대 규모의 노인학대 대응 인프라를 구축했다. 또, 전국 최초로 노인보호전문기관 전담 변호사를 배치해 학대 발생 시 조사의 전문성과 신뢰성을 확보하고, 피해노인을 위한 법률적 지원을 시행하고 있다. 관련 기관 종사자의 임금 및 수당 인상을 통한 처우도 개선, 노인학대와 관련된 상담·조사·예방교육 등 제공 서비스 질을 높였다. 노인학대에 대한 상담 및 신고 등은 누구나 1577-1389로 문의하면 된다.조태훈 경기도 노인복지과장은 "올해 하반기에는 경기 남부지역 내 학대피해노인 전용쉼터를 추가로 설치할 계획으로, 현재 경기 서부·북부 지역에 있는 학대피해노인 전용쉼터의 보호 사각지대를 해소하고 학대피해노인의 신속 분리 보호와 일상 복귀가 이뤄질 것으로 기대한다"고 말했다. 한편, 도는 노인학대 예방의 날을 맞아 14일 경기문화재단 다산홀에서 노인학대 예방의 날(6월 15일) 기념행사를 개최한다. 유엔(UN)은 2006년부터 매년 6월 15일을 세계 노인 학대인식의 날로 지정했다. 우리나라는 2017년도부터 범국민적으로 노인 학대에 대한 인식을 높이고 관심을 유도하기 위해 매년 6월 15일을 노인학대 예방의 날로 지정해 기념해 왔다.</p>' }}
        dangerouslySetInnerHTML={{ __html: '<p>HTML <b>내용</b>입니다.</p>' }}
      />
      <ReactionBox>
        <div className="Like">
          <LikeButton>
            <ProfileImg src={Like} />
            좋아요
          </LikeButton>
        </div>

        <div className="Scrap">
          <ScrapButton>
            <ProfileImg src={Scrap} />
            스크랩
          </ScrapButton>
        </div>
      </ReactionBox>
      <ReplyBox>
        <ReplyForm onSubmit={onSubmit}>
          <input
            placeholder="댓글을 입력하세요"
            value={input}
            onChange={onChange}
          />
          <button type="submit">작성</button>
        </ReplyForm>
      </ReplyBox>
    </PostViewerBlock>
  );
};

/*
const PostViewer = ({ post, error, loading }) => {
    // 에러 발생 시
    if (error) {
      if (error.response && error.response.status === 404) {
        return <PostViewerBlock>존재하지 않는 포스트입니다.</PostViewerBlock>;
      }
      return <PostViewerBlock>오류 발생!</PostViewerBlock>;
    }
  
  
  // 로딩 중이거나 아직 포스트 데이터가 없을 때
    if (loading || !post) {
      return null;
    }
  
  
  
  const { title, body, user, publishedDate, tags } = post;
    return (
      <PostViewerBlock>
        <PostHead>
          <h1>{title}</h1>
          <SubInfo>
            <span>
              <b>{user.username}</b>
            </span>
            <span>{new Date(publishedDate).toLocaleDateString()}</span>
          </SubInfo>
          { <Tags>
            {tags.map(tag => (
              <div className="tag">#{tag}</div>
            ))}
          </Tags> }
          
        </PostHead>
        <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      </PostViewerBlock>
    );
  };
*/

export default PostViewer;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  padding: 3px;
  background-color: #eee;
  border-radius: 50px;
`;

const LikeImg = styled.img`
  width: 5px;
  height: 5px;
  padding: 0px;
  background-color: #eee;
  border-radius: 50px;
`;

const ScrapImg = styled.img`
  width: 5px;
  height: 5px;
  padding: 0px;
  background-color: #eee;
  border-radius: 50px;
`;
