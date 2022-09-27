import styled from '@emotion/styled'
import React from 'react'

export const GradiantBack = styled.div`
  background: linear-gradient(60deg, #fc90a930, #7effd840, #fc90a930, #a4f4ff50, #a7b1ff30, #fc90a930, #fc90a930);
background-size: 800% 800%;

-webkit-animation: AnimationName 6s ease infinite;
-moz-animation: AnimationName 6s ease infinite;
-o-animation: AnimationName 6s ease infinite;
animation: AnimationName 6s ease infinite;

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-o-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName { 
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
`