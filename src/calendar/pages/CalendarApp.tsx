import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AdminAppBar from "../../admin/components/AdminAppBar";
import AdminToolbar from "../../admin/components/AdminToolbar";
import { useAddEvent } from "../../calendar/hooks/useAddEvent";
import ConfirmDialog from "../../core/components/ConfirmDialog";
import { useSnackbar } from "../../core/contexts/SnackbarProvider";
import Calendar from "../components/Calendar";
import EventDialog from "../components/EventDialog";
import { useDeleteEvent } from "../hooks/useDeleteEvent";
import { useEvents } from "../hooks/useEvents";
import { useUpdateEvent } from "../hooks/useUpdateEvent";
import { Event } from "../types/event";

const CalendarApp = () => {
  const snackbar = useSnackbar();
  const { t } = useTranslation();

  const [eventDeleted, setEventDeleted] =
    useState<string | undefined>(undefined);
  const [eventUpdated, setEventUpdated] =
    useState<Event | undefined>(undefined);
  const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
  const [openEventDialog, setOpenEventDialog] = useState(false);

  const { addEvent, isAdding } = useAddEvent();
  const { deleteEvent, isDeleting } = useDeleteEvent();
  const { data } = useEvents();
  const { isUpdating, updateEvent } = useUpdateEvent();

  const processing = isAdding || isDeleting || isUpdating;

  const handleAddEvent = async (event: Partial<Event>) => {
    addEvent(event as Event)
      .then(() => {
        snackbar.success(
          t("calendar.notifications.addSuccess", { event: event.title })
        );
        setOpenEventDialog(false);
      })
      .catch(() => {
        snackbar.error(t("common.errors.unexpected.subTitle"));
      });
  };

  const handleDeleteEvent = async () => {
    if (eventDeleted) {
      deleteEvent(eventDeleted)
        .then(() => {
          snackbar.success(t("calendar.notifications.deleteSuccess"));
          setOpenConfirmDeleteDialog(false);
          setOpenEventDialog(false);
        })
        .catch(() => {
          snackbar.error(t("common.errors.unexpected.subTitle"));
        });
    }
  };

  const handleUpdateEvent = async (event: Event) => {
    updateEvent(event)
      .then(() => {
        snackbar.success(
          t("calendar.notifications.updateSuccess", { event: event.title })
        );
        setOpenEventDialog(false);
      })
      .catch(() => {
        snackbar.error(t("common.errors.unexpected.subTitle"));
      });
  };

  const handleCloseConfirmDeleteDialog = () => {
    setOpenConfirmDeleteDialog(false);
  };

  const handleCloseEventDialog = () => {
    setEventUpdated(undefined);
    setOpenEventDialog(false);
  };

  const handleOpenConfirmDeleteDialog = (eventId: string) => {
    setEventDeleted(eventId);
    setOpenConfirmDeleteDialog(true);
  };

  const handleOpenEventDialog = (event?: Event) => {
    setEventUpdated(event);
    setOpenEventDialog(true);
  };

  return (
    <React.Fragment>
      <AdminAppBar>
        <AdminToolbar title={t("calendar.title")}>
          <Fab
            aria-label="add event"
            color="primary"
            onClick={() => handleOpenEventDialog()}
            size="small"
          >
            <AddIcon />
          </Fab>
        </AdminToolbar>
      </AdminAppBar>
      <Card>
        <Calendar
          contentHeight={720}
          events={data || []}
          onEventClick={handleOpenEventDialog}
        />
      </Card>
      <ConfirmDialog
        description={t("calendar.confirmations.delete")}
        pending={processing}
        onClose={handleCloseConfirmDeleteDialog}
        onConfirm={handleDeleteEvent}
        open={openConfirmDeleteDialog}
        title={t("common.confirmation")}
      />
      {openEventDialog && (
        <EventDialog
          onAdd={handleAddEvent}
          onClose={handleCloseEventDialog}
          onDelete={handleOpenConfirmDeleteDialog}
          onUpdate={handleUpdateEvent}
          open={openEventDialog}
          processing={processing}
          event={eventUpdated}
        />
      )}
    </React.Fragment>
  );
};

export default CalendarApp;
