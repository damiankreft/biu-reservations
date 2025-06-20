'use client';

import React, { use, useTransition } from 'react';
import { useTranslation } from 'react-i18next';
import { User, UserActionType, UsersContext } from '@/lib/usersContext';
import UserFilters from './userFilters';
import { handleDeleteUser, handleUpdateUser } from '@/app/admin/users/page';
import UserEdit from './userEdit';

export default function UsersList({ users }: { users: Promise<User[]> }) {
  const { t } = useTranslation();
  const [isPending, startTransition] = useTransition();
  const confirmationModal = React.useRef<HTMLDialogElement>(null);
  const editUserModal = React.useRef<HTMLDialogElement>(null);
  const { users: cachedUsers, dispatch } = React.useContext(UsersContext);
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);
  // const allUsers = use(users);

  const [filters, setFilters] = React.useState<{
    search: string;
    role: string;
    isActive: string;
  }>({
    search: '',
    role: '',
    isActive: '',
  });

  // const newUsers: {
  //     name: string;
  //     email: string;
  //     role: string;
  //     isActive: boolean;
  // }[] = allUsers.map((user) => ({
  //     name: user.name,
  //     email: user.email,
  //     role: user.role,
  //     isActive: user.isActive,
  // }));

  return (
    <div className="flex w-full">
      <div className="flex-col w-1/4">
        <aside className="border-r border-base-300 p-4">
          <UserFilters
            filters={filters}
            setFilters={setFilters}
            allUsers={cachedUsers}
          />
        </aside>
      </div>
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-bold mb-4">
          {t('usersManagement', {
            defaultValue: 'User Management',
          })}
        </h2>
        <div className="mb-4">
          <table className="table w-full">
            <thead>
              <tr>
                <th>
                  {t('username', {
                    defaultValue: 'Username',
                  })}
                </th>
                <th>{t('email', { defaultValue: 'Email' })}</th>
                <th>{t('role', { defaultValue: 'Role' })}</th>
                <th>
                  {t('createdAt', {
                    defaultValue: 'Created At',
                  })}
                </th>
                <th>{t('actions', { defaultValue: 'Actions' })}</th>
              </tr>
            </thead>
            <tbody>
              {cachedUsers
                .filter((u) => {
                  const matchesSearch =
                    u.name
                      .toLowerCase()
                      .includes(filters.search.toLowerCase()) ||
                    u.email
                      .toLowerCase()
                      .includes(filters.search.toLowerCase());
                  const matchesRole = !filters.role || u.role === filters.role;
                  const matchesActiveStatus =
                    filters.isActive === ''
                      ? true
                      : filters.isActive === 'active'
                        ? u.isActive
                        : !u.isActive;

                  return matchesSearch && matchesRole && matchesActiveStatus;
                })
                .map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button
                        onClick={(e) => {
                          setSelectedUser(user);
                          e.preventDefault();
                          if (!editUserModal.current) {
                            console.error('Edit user modal is not available');
                            return;
                          }
                          editUserModal.current?.showModal();
                        }}
                        className="btn btn-primary btn-sm"
                      >
                        {t('edit', {
                          defaultValue: 'Edit',
                        })}
                      </button>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleDelete(user);
                        }}
                        className="btn btn-secondary btn-sm ml-2"
                      >
                        {t('delete', {
                          defaultValue: 'Delete',
                        })}
                      </button>
                      {user.isActive ? (
                        <span className="badge badge-success ml-2">
                          {t('active', {
                            defaultValue: 'Active',
                          })}
                        </span>
                      ) : (
                        <span className="badge badge-error ml-2">
                          {t('inactive', {
                            defaultValue: 'Inactive',
                          })}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <dialog ref={confirmationModal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {t('confirmDelete', {
              defaultValue: 'Confirm Delete',
            })}
          </h3>
          <p className="py-4">
            {t('confirmDeleteMessage', {
              defaultValue: 'Are you sure you want to delete this user?',
            })}
          </p>
          {selectedUser && (
            <p>
              {t('userToDelete', {
                defaultValue: 'User to delete: {{name}}',
                name: selectedUser.name,
              })}
            </p>
          )}
          <div className="modal-action">
            <form
              method="dialog"
              onSubmit={async (e) => {
                e.preventDefault();
                if (!selectedUser) return;

                startTransition(async () => {
                  await handleDeleteUser(selectedUser.id);

                  dispatch({
                    type: UserActionType.Delete,
                    id: selectedUser.id,
                  });

                  confirmationModal.current?.close();
                });
              }}
            >
              <button className="btn btn-primary">
                {t('confirm', { defaultValue: 'Confirm' })}
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2"
                onClick={() => {
                  confirmationModal.current?.close();
                  setSelectedUser(null);
                }}
              >
                {t('cancel', { defaultValue: 'Cancel' })}
              </button>
            </form>
          </div>
        </div>
      </dialog>
      (
      <dialog ref={editUserModal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            {t('confirmDelete', {
              defaultValue: 'Confirm Delete',
            })}
          </h3>
          <p className="py-4">
            {t('confirmDeleteMessage', {
              defaultValue: 'Are you sure you want to delete this user?',
            })}
          </p>
          {selectedUser && (
            <p>
              {t('userToDelete', {
                defaultValue: 'User to delete: {{name}}',
                name: selectedUser.name,
              })}
            </p>
          )}
          <div className="modal-action">
            <UserEdit user={selectedUser!} onSubmit={(e) => handleEdit(e)} />
          </div>
        </div>
      </dialog>
      )
    </div>
  );

  function handleDelete(
    user: User,
  ): React.MouseEventHandler<HTMLButtonElement> | undefined {
    return async (e) => {
      e.preventDefault();
      setSelectedUser(user);
      if (!confirmationModal.current) {
        console.error('Confirmation modal is not available');
        return;
      }

      confirmationModal.current?.showModal();
    };
  }

  function handleEdit(user: User): Promise<void> {
    return handleUpdateUser(user)
      .then(() => {
        console.log('User updated:', user);
        dispatch({
          type: UserActionType.Change,
          user: user,
        });
      })
      .catch((error) => {
        console.error('Error updating user:', error);
      });
  }
}
