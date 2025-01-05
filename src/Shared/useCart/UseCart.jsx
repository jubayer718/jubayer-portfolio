import { useQuery } from '@tanstack/react-query';


const UseCart = () => {


   const {  data:cart=[] } = useQuery({
    queryKey: ['cart'],
    queryFn: () =>
      fetch('http://localhost:3000/projects')
      .then((res) =>
        res.json(),
      ).then(data => {
        return data
      })
  })
return [cart]
};

export default UseCart;