import { useQuery } from '@tanstack/react-query';


const UseCart = () => {


   const {  data:cart=[] } = useQuery({
    queryKey: ['cart'],
    queryFn: () =>
      fetch('https://porfolio-server-ntqczh0xi-jubayer718s-projects.vercel.app/projects')
      .then((res) =>
        res.json(),
      ).then(data => {
        return data
      })
  })
return [cart]
};

export default UseCart;