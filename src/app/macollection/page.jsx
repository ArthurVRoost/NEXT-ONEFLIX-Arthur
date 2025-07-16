'use client'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { persistUser } from '../../store/slices/authSlice'
import Image from 'next/image'
import stylesMaCollection from './macollection.module.css'

export default function MaCollectionPage() {
  const { currentUser, isAuthenticated } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const router = useRouter()
  const [purchaseHistory, setPurchaseHistory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté
    const storedUser = JSON.parse(localStorage.getItem('currentUser'))
    if (storedUser) {
      dispatch(persistUser(storedUser))
      loadPurchaseHistory(storedUser.id)
    } else if (!isAuthenticated) {
      router.push('/')
    }
  }, [dispatch, isAuthenticated, router])

  const loadPurchaseHistory = (userId) => {
    setIsLoading(true)
    // Récupérer l'historique depuis localStorage
    const history = JSON.parse(localStorage.getItem(`purchaseHistory_${userId}`)) || []
    
    // Trier par date (plus récent en premier)
    const sortedHistory = history.sort((a, b) => new Date(b.date) - new Date(a.date))
    
    setPurchaseHistory(sortedHistory)
    setIsLoading(false)
  }

  const calculateTotalSpent = () => {
    return purchaseHistory.reduce((total, purchase) => {
      return total + purchase.items.reduce((purchaseTotal, item) => {
        return purchaseTotal + (item.price * item.quantity)
      }, 0)
    }, 0)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }

  if (!isAuthenticated && !currentUser) {
    return (
      <div className={stylesMaCollection.container}>
        <div className={stylesMaCollection.loadingMessage}>
          <p>Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className={stylesMaCollection.container}>
      <div className={stylesMaCollection.pageHeader}>
        <h1 className={stylesMaCollection.title}>My Collection</h1>
        <p className={stylesMaCollection.subtitle}>Your History</p>
      </div>

      <div className={stylesMaCollection.statsCard}>
        <div className={stylesMaCollection.statItem}>
          <div className={stylesMaCollection.statNumber}>{purchaseHistory.length}</div>
          <div className={stylesMaCollection.statLabel}>Orders</div>
        </div>
        <div className={stylesMaCollection.statItem}>
          <div className={stylesMaCollection.statNumber}>
            {purchaseHistory.reduce((total, purchase) => total + purchase.items.length, 0)}
          </div>
          <div className={stylesMaCollection.statLabel}>Articles</div>
        </div>
        <div className={stylesMaCollection.statItem}>
          <div className={stylesMaCollection.statNumber}>{formatPrice(calculateTotalSpent())}</div>
          <div className={stylesMaCollection.statLabel}>Total Spend</div>
        </div>
      </div>

      {isLoading ? (
        <div className={stylesMaCollection.loadingContainer}>
          <div className={stylesMaCollection.loader}></div>
          <p>Loading...</p>
        </div>
      ) : purchaseHistory.length === 0 ? (
        <div className={stylesMaCollection.emptyState}>
          <div className={stylesMaCollection.emptyIcon}>
            <i className="fa-solid fa-box-open"></i>
          </div>
          <h3>Your collection is empty</h3>
          <p>You haven't bought anything.</p>
          <button 
            className={stylesMaCollection.shopButton}
            onClick={() => router.push('/collection')}
          >
            <i className="fa-solid fa-shopping-bag"></i>
            Discover our collection
          </button>
        </div>
      ) : (
        <div className={stylesMaCollection.historyContainer}>
          <h2 className={stylesMaCollection.historyTitle}>History of Orders</h2>
          
          {purchaseHistory.map((purchase, index) => (
            <div key={index} className={stylesMaCollection.purchaseCard}>
              <div className={stylesMaCollection.purchaseHeader}>
                <div className={stylesMaCollection.purchaseInfo}>
                  <h3>Order #{purchase.id}</h3>
                  <p className={stylesMaCollection.purchaseDate}>
                    {new Date(purchase.date).toLocaleDateString('fr-FR', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
                <div className={stylesMaCollection.purchaseTotal}>
                  <span className={stylesMaCollection.totalLabel}>Total:</span>
                  <span className={stylesMaCollection.totalAmount}>
                    {formatPrice(purchase.items.reduce((total, item) => total + (item.price * item.quantity), 0))}
                  </span>
                </div>
              </div>
                
              <div className={stylesMaCollection.itemsList}>
                {purchase.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={stylesMaCollection.purchaseItem}>
                    <div className={stylesMaCollection.itemImage}>
                      <Image
                        src={item.image || '/img/placeholder.jpg'}
                        alt={item.name}
                        width={60}
                        height={80}
                        className={stylesMaCollection.itemImg}
                      />
                    </div>
                    <div className={stylesMaCollection.itemDetails}>
                      <h4 className={stylesMaCollection.itemName}>{item.name}</h4>
                      <p className={stylesMaCollection.itemCategory}>{item.category}</p>
                      <div className={stylesMaCollection.itemMeta}>
                        <span className={stylesMaCollection.itemPrice}>{formatPrice(item.price)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}