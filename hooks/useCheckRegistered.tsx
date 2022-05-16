import { useMoralis, useMoralisQuery } from 'react-moralis'


export const useCheckRegistered = ():boolean=>{
  const {
		user,
	} = useMoralis()
	const { data } = useMoralisQuery(
		'NewUser',
		(q) => q.equalTo('userAddress', user?.get('ethAddress')).limit(1),
		[user?.get('ethAddress')]
	)
  return data[0] ? true : false
}