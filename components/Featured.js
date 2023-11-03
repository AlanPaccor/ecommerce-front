import Center from "@/components/Center";
import styled from "styled-components"
import Button from "./Button";
import CartIcon from "./icons/Carticon";

const Bg = styled.div`
    background-color: #222;
    color:#fff;
    padding: 50px 0;
`;

const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:3rem;
`;
const Desc = styled.p`
    color:#aaa;
    font-size:.8rem;
`;
const Wrapper = styled.div`
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
    div{
        align-items: center;
    }
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: .9fr 1.1fr;
    gap: 40px;
    img{
        max-width: 100%;
    }
`;

const Column = styled.div`
display: flex;
align-items: center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap:10px;
    margin-top:25px;
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>
                                Pro Anywhere
                            </Title>
                            <Desc>
                                Lorem jnvsvnie envjsvksnvjk jesjvsijvisjv sej jie vii jesivemsvim ismvi mi mismivsenvi snvn isnvisn
                                snvk nsnvsn nien vin isnvlsnvl sneivn slnkvsneniv sn  inie nsvi nsleknviesn in ln nslke nvksemkv 
                            </Desc>
                            <ButtonsWrapper>
                            <Button outline white>
                                Read more
                            </Button>
                            <Button primary>
                                <CartIcon/>
                                Add to cart
                            </Button>
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://alanpaccor-next-ecommerce.s3.amazonaws.com/1699025199400.png" alt="" />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    )
}